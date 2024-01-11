import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  fonysize = true
  title = 'routing';
 constructor(private route:Router){

 }

onback(){
// this.route.navigate(['test','34'])
this.route.navigateByUrl('/test/35')
}
CanDeactivede(){
 return new Promise((resolve, reject)=> {
   resolve(confirm('Do You Want to Back')) 
 })  
 
}


}


