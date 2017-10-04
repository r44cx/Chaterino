import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {  
    
    displayName: string;
   
    constructor() {
        this.displayName = 'Error';
    }
    
    setDisplayName(displayName) {
        this.displayName = displayName;
    }
    
    getDisplayName() {
        return this.displayName;
    }   
}