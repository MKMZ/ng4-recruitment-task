import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { MdSort, MdPaginator } from '@angular/material';
import { TableColumn } from 'shared/table/table-column';
import { TableDataSource } from 'shared/table/table-data-source';

export abstract class TableComponent<T> {

  public dataSource: TableDataSource<T>;
  public displayColumns: TableColumn[] | null;
  public columnKeys: String[] | null;

  constructor() { }

}
