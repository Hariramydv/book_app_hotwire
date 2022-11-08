import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bootstrap-modal"
export default class extends Controller {
  connect() {
    alert("bot");
    debugger
    this.modal = new bootstrap.Modal(this.element)
    this.modal.show()

  }
  disconnect() {
    this.modal.hide()
  }
  submitEnd(event){
    this.modal.hide()
  }
}
