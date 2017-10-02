import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MdPaginator, MdSort } from '@angular/material';
import 'rxjs/add/observable/merge';


export class TableDataSource<T> extends DataSource<any> {
    public data: T[];
    public dataLength: number;

    constructor(private _database: Observable<T[]>,
        private _paginator: MdPaginator,
        private _sort: MdSort) {
        super();
        this.dataLength = 0;
    }


    connect(): Observable<T[]> {
        const displayDataChanges = [
        ];
        if (this._sort) {
            displayDataChanges.push(this._sort.sortChange);
        }
        if (this._paginator) {
            displayDataChanges.push(this._paginator.page);
        }
        console.log("data source");
        console.log(this);
        return Observable.merge(this._database, ...displayDataChanges).map(arr => {
            if (arr instanceof Array) {
                this.data = arr;
                this.dataLength = this.data.length;
            }
            let result = null;
            console.log("inside connect");
            console.log(arr);
            console.log(this);
            if (arr) {
                result = this.data.slice(0);
                if (this._sort && this._sort.active) {
                    const key = this._sort.active;
                    result = result.sort((a, b) => (a[key] < a[key] ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
                }
                if (this._paginator) {
                    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                    result = result.splice(startIndex, this._paginator.pageSize);
                }
            }

            return result;
        });
    }

    disconnect(): void {
    }
}
