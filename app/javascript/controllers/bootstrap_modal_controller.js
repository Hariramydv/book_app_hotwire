import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bootstrap-modal"
export default class extends Controller {
  connect() {
    console.log(this.element,"/////")
    this.modal = new bootstrap.Modal(this.element)
    //$('.modal-backdrop').remove();
    this.modal.show() 
    
  }
  disconnect() {
    this.modal.hide()
  }
  submitEnd(event){
    $("#exampleModal").modal("hide");
  }
  hideModal() {
    alert("hide")
    this.modal.hide();
}
}
