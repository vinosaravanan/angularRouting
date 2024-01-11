import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id:any;
  name:any;

  constructor(private route:Router, private Active:ActivatedRoute){
     console.log(this.Active);
  }

  ngOnInit(): void {
  this.id = this.Active.snapshot.paramMap.get('id')
  console.log(this.id);

  this.name = this.Active.snapshot.data['resolvedData']

  console.log(this.name);
  
  }
  


}
