import { Component, OnInit } from '@angular/core';
import { UserService } from '..//user.service';
import { User } from '..//user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:any) => {
      this.user = data;
    });
  }
}

// export class ProfileComponent2 implements OnInit {
//   user: User | undefined;
//   profileForm: FormGroup;

//   constructor(private userService: UserService, private fb: FormBuilder) {
//     this.profileForm = this.fb.group({
//       name: [''],
//       username: [''],
//       email: [''],
//       phone: [''],
//       website: ['']
//     });
//   }

//   ngOnInit(): void {
//     this.userService.getUser().subscribe((data) => {
//       this.user = data;
//       this.profileForm.patchValue(data);
//     });
//   }
// }
