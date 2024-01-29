import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefectiveItems } from './defective-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefectiveItemsService 
{
  private baseURL="http://localhost:8080/ims/DefectiveItems";
  private addDef="http://localhost:8080/ims/DefectiveItems/addDefectiveItems";
  private getAllDef="http://localhost:8080/ims/DefectiveItems/getAllDefectiveItems";
  private getDefById="http://localhost:8080/ims/DefectiveItems/getDefectiveItemsById";
  private updateDef="http://localhost:8080/ims/DefectiveItems/editDefectiveItems";
  private deleteDef="http://localhost:8080/ims/DefectiveItems/deleteDefectiveItems";

  constructor(private httpClient:HttpClient) { }

  createDefectiveItems(defectiveItems:DefectiveItems):Observable<Object>
  {
    return this.httpClient.post(`${this.addDef}`, defectiveItems)
  }

  getAllDefectiveItemsList():Observable<DefectiveItems[]>
  {
    return this.httpClient.get<DefectiveItems[]>(`${this.getAllDef}`)
  }

  getDefectiveItemsById(defectiveItemsId:number):Observable<DefectiveItems>
  {
    return this.httpClient.get<DefectiveItems>(`${this.getDefById}/${defectiveItemsId}`)
  }

  updateDefectiveItems(defectiveItems:DefectiveItems, defectiveItemsId:number):Observable<Object>
  {
    return this.httpClient.put(`${this.updateDef}/${defectiveItemsId}`, defectiveItems)
  }

  deleteDefectiveItems(defectiveItemsId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteDef}/${defectiveItemsId}`)
  }

}
