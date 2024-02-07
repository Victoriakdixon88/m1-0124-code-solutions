/* exported getPropertyValue */
const getPropertyValue =(object:object, key:string): unknown => object[key as keyof typeof object]
