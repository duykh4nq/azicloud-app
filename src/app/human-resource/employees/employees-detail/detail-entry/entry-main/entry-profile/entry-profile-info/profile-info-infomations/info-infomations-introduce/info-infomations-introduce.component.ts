import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import jsonDoc from "./doc";

@Component({
  selector: 'app-info-infomations-introduce',
  templateUrl: './info-infomations-introduce.component.html',
  styleUrls: ['./info-infomations-introduce.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoInfomationsIntroduceComponent implements OnInit {

  constructor() { }

  editordoc = jsonDoc;
  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    // [{ fontName: ["Time New Roman"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    )
  });
  get doc(): AbstractControl {
    return this.form.get("editorContent");
  }
  ngOnInit(): void {
    this.editor = new Editor();//editor
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
