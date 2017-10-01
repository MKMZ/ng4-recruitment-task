import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { MdSort, MdPaginator } from '@angular/material';
import { TableColumn } from 'shared/table/table-column';

export abstract class TableComponent<T> {

  dataSource: T[] | null;
  displayColumns: TableColumn[] | null;

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor() { }

}
