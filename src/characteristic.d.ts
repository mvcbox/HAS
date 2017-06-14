/// <reference types="node" />
import Service from './service';
import { statusCodes } from './TLV/values';
export declare type ValueFormat = 'bool' | 'uint8' | 'uint16' | 'uint32' | 'int' | 'float' | 'string' | 'tlv8' | 'data';
export declare type ValueUnit = 'celsius' | 'percantage' | 'arcdegrees' | 'lux' | 'seconds';
export default class Characteristic {
    private ID;
    private type;
    private value?;
    private valueFormat;
    private valueUnit?;
    private minValue?;
    private maxValue?;
    private stepValue?;
    private maxLength?;
    private validValues?;
    private validRangeValues?;
    private isHidden?;
    private hasNotifications?;
    private hasValue?;
    private isReadonly?;
    private additionalAuthorization?;
    private service?;
    private description?;
    private subscribers;
    onWrite: (value: any, callback: (status: statusCodes) => void, authData?: Buffer) => void;
    constructor(ID: number, type: string, valueFormat: ValueFormat, isHidden?: boolean, hasNotifications?: boolean, hasValue?: boolean, isReadonly?: boolean, additionalAuthorization?: boolean, valueUnit?: ValueUnit, description?: string, minValue?: number, maxValue?: number, stepValue?: number, maxLength?: number, validValues?: number[], validRangeValues?: number[]);
    getID(): number;
    getType(): string;
    getHasValue(): boolean;
    getHasNotifications(): boolean;
    getIsReadonly(): boolean;
    private isNumeric();
    private hasLength();
    private isBuffer();
    setValue(value: any, checkValue?: boolean): void;
    getValue(): any;
    setService(service: Service): void;
    subscribe(socketID: string): void;
    unsubscribe(socketID: string): void;
    isValid(value: any): boolean;
    writeValue(value: any, authData: string): Promise<number>;
    getPermissions(): string[];
    getMetadata(): {
        [index: string]: any;
    };
    addMetadata(object: any): void;
    toJSON(): {};
}