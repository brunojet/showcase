import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-selectable-list',
    template: ''
})

export abstract class SelectableListComponent<T> {
    private _items: T[] = [];

    constructor(protected el: ElementRef) {
    }

    @Input()
    set items(value: T[]) {
        if (value && value.length > 0) {
            this._items = value;
            this.selectItem(this._items[0]);
        }
    }

    get items(): T[] {
        return this._items;
    }

    @Output() itemSelected = new EventEmitter<T>();

    selectedItem: T | null = null;

    selectItem(item: T) {
        this.selectedItem = item;
        this.itemSelected.emit(item);
    }

    isSelected(item: T): boolean {
        return this.selectedItem === item;
    }
}