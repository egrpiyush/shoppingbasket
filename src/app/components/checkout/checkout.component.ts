import { Component, OnInit } from '@angular/core';
import { InterComponentMessageService } from "../../services/inter-component-messaging-service/inter-component-message.service"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
