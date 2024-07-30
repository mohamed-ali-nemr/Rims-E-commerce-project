import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  formPost: FormGroup;
  message2 = '';
  message = '';
  post: any = {};
  id: any;
  fileToUpload: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.formPost = this.formBuilder.group({
      user_id: ['1'],  // Default value for user_id
      title: ['', Validators.required],
      body: ['', Validators.required],
      images: [null],
      
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  get f() {
    return this.formPost.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.api.get_post_by_id(this.id).subscribe({
        next: (data: any) => {
          if (data.post) {
            this.post = data.post;
            this.formPost.patchValue({
              user_id: this.post.user_id || '1',  // Use the value from the post or default to '1'
              title: this.post.title,
              body: this.post.body
            });
          }
        }
      });
    }
  }

  onSubmit() {
    const formData:FormData = new FormData();
    formData.append('user_id', this.formPost.value.user_id);
    formData.append('title', this.formPost.value.title);
    formData.append('body', this.formPost.value.body);
    
    if (this.fileToUpload !== null) {
      formData.append('images', this.fileToUpload);
    }

    if (this.id) {
      formData.append('_method', 'PUT');
      this.api.update_posts(this.id, formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Post updated successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error updating Post';
          console.error(error);
        }
      });
    } else {
      // Display the values
      

      this.api.insert_posts(formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Post created successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error creating Post';
          console.error(error);
        }
      });
    }
  }
}