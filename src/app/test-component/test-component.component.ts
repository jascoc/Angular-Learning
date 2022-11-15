import { Component} from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  i = 4;
  integerArray = [1,2,3,4];
  forArrayTest = [
    {name: "test0", description: "desc0"},
    {name: "test1", description: "desc1"},
    {name: "test2", description: "desc2"},
    {name: "test3", description: "desc3"}
  ]
  viewMode = "";

  integerArrayIsEmpty() {
    return !this.integerArray.length
  }

  onAdd(i: number) {
    this.forArrayTest.push({name: "test" + i, description: "desc" + i});
    this.i++;
  }

  onRemove(elements: { name: string; description: string; }) {
    let i = this.forArrayTest.indexOf(elements)
    console.log(i);
    this.forArrayTest.splice(i, 1);
    console.log(this.forArrayTest);
  }
}
