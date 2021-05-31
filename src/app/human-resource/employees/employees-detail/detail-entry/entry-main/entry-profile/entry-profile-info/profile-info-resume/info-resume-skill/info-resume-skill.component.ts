import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-info-resume-skill',
  templateUrl: './info-resume-skill.component.html',
  styleUrls: ['./info-resume-skill.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoResumeSkillComponent implements OnInit {

  public skilltype: Array<Select2OptionData>;
  public level: Array<Select2OptionData>;
  public skill: Array<Select2OptionData>;
  closeModal: string;
  constructor(
    private modalService: NgbModal,
  ) { }

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
    this.skilltype = [
      {
        id: '001',
        text: 'Kỹ năng mềm'
      },
      {
        id: '002',
        text: 'Kỹ năng công việc'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.skill = [
      {
        id: '001',
        text: 'Hát'
      },
      {
        id: '002',
        text: 'đá bóng'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.level = [
      {
        id: '001',
        text: 'level 1'
      },
      {
        id: '002',
        text: 'level 2'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
  }

}
