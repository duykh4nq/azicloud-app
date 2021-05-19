import { Component, Input } from '@angular/core';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-employees-pagination',
  templateUrl: './employees-pagination.component.html',
  styleUrls: ['./employees-pagination.component.css']
})
export class EmployeesPaginationComponent {
  // constructor(config: NgbModalConfig, private modalService: NgbModal) {
  //   // customize default values of modals used by this component tree
  //   config.backdrop = 'static';
  //   config.keyboard = false;
  // }

  // open(content) {
  //   this.modalService.open(content);
  // }
  closeModal: string;

  constructor(private modalService: NgbModal) { }

  triggerModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
