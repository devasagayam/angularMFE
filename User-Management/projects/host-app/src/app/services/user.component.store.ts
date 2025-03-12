import { ComponentStore } from "@ngrx/component-store";
import { User } from "../models/user.model";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { inject, Injectable } from "@angular/core";
import { switchMap, tap } from "rxjs";
import { UserService } from "./user.service";

export interface UserComponentState extends EntityState<User> {
    loading:boolean,
    error:string,
    editingUserId:number | null,
    addingUser:boolean
}

const UserComponentStoreEntityAdapter:EntityAdapter<User> = createEntityAdapter<User>();

@Injectable({
    providedIn:'root'
})
export class UserComponentStore extends ComponentStore<UserComponentState>{
   
    readonly users$ = this.select((state)=>UserComponentStoreEntityAdapter.getSelectors().selectAll(state));
    readonly loading$ = this.select((state)=>state.loading);
    readonly editingUserId$ = this.select((state)=>state.editingUserId);
    readonly addingUser$ = this.select((state)=>state.addingUser);
    readonly error$ = this.select((state)=>state.error);

    userService = inject(UserService)
    constructor(){
        super(UserComponentStoreEntityAdapter.getInitialState({
            error:'',
            loading:false,
            editingUserId:null,
            addingUser:false
        }))
    }

    readonly setLoading = this.updater((state,loading:boolean)=>({...state,loading}))
    readonly setUser = this.updater((state,user:User[])=>{
        return UserComponentStoreEntityAdapter.setAll(user,{...state,loading:false})
    })
    readonly setError = this.updater((state,error:string)=>({...state,error}))

    fetchAllUsers = this.effect((trigger$)=>trigger$.pipe(
        tap(()=>this.setLoading(true)),
        switchMap(()=>this.userService.getUsers().pipe(
            tap(({next:(users)=>this.setUser(users),error:(err)=>this.setError('Could not fetch Users')}))
        ))
    ))
    
}