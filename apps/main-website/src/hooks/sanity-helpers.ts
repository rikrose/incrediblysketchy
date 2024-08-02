export function makePortableText(value: any, type: string){
  if (!value) {
    return null;
  }
  let retval = value
  retval._type = type;
  
  return retval;
}
