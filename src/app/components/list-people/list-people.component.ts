import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import { PeopleService } from "../../services/people.service";
import { HelpersService } from "../../services/helpers.service";

@Component({
  selector: "app-list-people",
  templateUrl: "./list-people.component.html",
  styleUrls: ["./list-people.component.css"],
})
export class ListPeopleComponent implements OnInit {
  @Input() set name(value: string) {
    this.searchText = value;
  }
  errorService: boolean;
  searchText: string;
  people = [];
  error: any = {
    rut: false,
    date: false,
  };
  closeResult: string;
  data: any = {
    direccion: {
      comuna: "",
      calle: "",
      numero: "",
    },
    fechaNacimiento: "",
  };

  constructor(
    private peopleService: PeopleService,
    private modalService: NgbModal,
    private helperSrv: HelpersService
  ) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (data: any[]) => {
        this.people = data;
      },
      (error) => {
        this.errorService = true;
      }
    );
  }

  openModalDetail(id: number) {
    console.log(id);
  }

  open(content, p) {
    this.modalService
      .open(content, {
        ariaLabelledBy: "modal-basic-title",
      })
      .result.then((_) => {
        this.error.date = false;
        this.error.rut = false;
      });

    this.data = { ...p };

    if (!moment(this.data.fechaNacimiento, "MM/DD/YYYY", true).isValid()) {
      this.error.date = !this.error.date;
    }

    if (!this.helperSrv.rutisValid(this.data.rut)) {
      this.error.rut = !this.error.rut;
    }
  }
}
