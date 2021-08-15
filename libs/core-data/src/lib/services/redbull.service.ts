import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Redbull } from '@redbull/api-interfaces'

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RedbullService {
  model = 'redbulls'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
    }

  all() {
    return this.httpClient.get(this.getUrl())
    }

    getUrlById(id){
      return `${this.getUrl()}/${id}`
    }
    
    create(redbulls: Redbull){
      return this.httpClient.post(this.getUrl(), redbulls)
    }

    update(redbulls: Redbull){
      return this.httpClient.patch(this.getUrlById(redbulls.id), redbulls)
    }

    delete(redbullId){
      return this.httpClient.delete(this.getUrlById(redbullId))
    }}
   
