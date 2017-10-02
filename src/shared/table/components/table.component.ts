import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { MdSort, MdPaginator } from '@angular/material';
import { TableColumn } from 'shared/table/table-column';
import { TableDataSource } from 'shared/table/table-data-source';
import { Observable } from 'rxjs/Observable';
import { TableState } from 'shared/table/table-state';

export abstract class TableComponent<T> {

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  public dataSource: TableDataSource<T>;
  public displayColumns: TableColumn[] | null;
  public columnKeys: String[] | null;
  public tableProps: Observable<TableState>;
  public pageSize: number;

  constructor() { }

}
