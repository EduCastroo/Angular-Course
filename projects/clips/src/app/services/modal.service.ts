import { Injectable } from '@angular/core';

interface Imodal{
  id: string;
  visible: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals : Imodal[] = []

  constructor() { }

  register(id: string){
    this.modals.push({
      id,
      visible: false
    })
  }

  unregister(id: string){
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

  isModalOpen(id: string) : boolean{
    Boolean(this.modals.find(element => element.id === id)?.visible)
    return !!this.modals.find(element => element.id === id)?.visible
  }

  toggleModal(id: string){
    const modal = this.modals.find(element => element.id === id)

    if(modal){
      modal.visible = !modal.visible
    }
    //this.visible = !this.visible
  }

}
