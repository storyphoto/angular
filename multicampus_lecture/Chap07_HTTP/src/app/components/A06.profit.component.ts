import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>
                    6. HTTP Service
                    <span class="label label-primary">profit</span>
                </h3>
            </div>

            <div class="card-body form-inline">
                <div class="form-group">
                    <select class="form-control">
                        <option value="All">All</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Change</button>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit</th>
                            <th>Expenses</th>
                            <th>Amount</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>

            <div class="card-body">
                <textarea class="form-control"></textarea>
            </div>
        </div>
    `,
    providers: []
})
export class A06Component  { 
    
}