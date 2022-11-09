import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bootstrap-modal"
export default class extends Controller {
  connect() {
    console.log(this.element,"/////")
    this.modal = new bootstrap.Modal(this.element)
    this.modal.show() 
    $('#exampleModal').modal("show");
  }
  disconnect() {
    this.modal.hide()
  }
  submitEnd(event){
    this.modal.hide()
  }
}
