import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort } from '@angular/material';
import 'rxjs/add/observable/merge';


export class TableDataSource<T> extends DataSource<any> {
    constructor(private _database: Observable<T[]>,
        private _paginator: MatPaginator,
        private _sort: MatSort) {
        super();
    }


    connect(): Observable<T[]> {
        return this._database.map(arr => {
            console.log("inside connect");
            console.log(arr);
            console.log(this);
            if (this._sort && this._sort.active) {
                const key = this._sort.active;
                arr = arr.sort((a, b) => (a[key] < a[key] ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
            }
            if (this._paginator) {
                const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                arr = arr.splice(startIndex, this._paginator.pageSize);
            }
            return arr;
        });
    }

    disconnect(): void {
    }
}
