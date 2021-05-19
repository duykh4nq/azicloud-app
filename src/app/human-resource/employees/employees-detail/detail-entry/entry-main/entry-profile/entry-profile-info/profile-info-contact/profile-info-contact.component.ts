import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-info-contact',
  templateUrl: './profile-info-contact.component.html',
  styleUrls: ['./profile-info-contact.component.css']
})
export class ProfileInfoContactComponent implements OnInit {

  public exampleData: Array<Select2OptionData>;
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

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'United States',
        text: 'Trưởng phòng kinh doanh'
      },
      {
        id: 'United Kingdom',
        text: 'Lập trình Mobile Apps'
      },
      {
        id: 'Afghanistan',
        text: 'Nghỉ'
      }
    ];
  }

}
