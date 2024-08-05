
export const today = () => {
	let d = new Date();
	const offset = d.getTimezoneOffset();
	d = new Date(d.getTime() - offset * 60 * 1000);
	return d.toISOString().split("T")[0];
};
  
export const isDate = (d: string) => {
	const dateObj = new Date(d);
	return dateObj instanceof Date && !isNaN(dateObj.valueOf());
};

export const dateStringComp = (a: string, b: string)=>{
	const dta = new Date(a).getTime();
	const dtb = new Date(b).getTime();
	return dtb - dta;
};

export const durationString = (a: string)=>{
	const dta = new Date(a);
	const dtb = new Date(today());
	const diff = dtb.getTime() - dta.getTime();
	const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
	if(diffDays === 0) return "<1 day";
	if(diffDays === 1) return "1 day";
	return diffDays+" days";
};