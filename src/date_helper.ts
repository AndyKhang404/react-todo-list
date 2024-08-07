
export const today = () => {
	let d = new Date();
	const offset = d.getTimezoneOffset();
	d = new Date(d.getTime() - offset * 60 * 1000);
	return d.toISOString().split("T")[0];
};

export const todayObj = () => {
	let d = new Date();
	const offset = d.getTimezoneOffset();
	d = new Date(d.getTime() - offset * 60 * 1000);
	return d;
};
  
export const isDate = (d: string) => {
	const dateObj = new Date(d);
	return dateObj instanceof Date && !isNaN(dateObj.valueOf());
};

export const dateComp = (a: Date, b: Date)=>{
	return b.getTime() - a.getTime();
};

export const durationTilToday = (a: Date)=>{
	const dtb = new Date(today());
	const diff = a.getTime() - dtb.getTime();
	const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
	return diffDays;
};

export const durationTilTodayString = (a: Date): [number,string] =>{
	const diffDays = durationTilToday(a);
	if(diffDays < 0) return [2,"Overdue"];
	if(diffDays < 1) return [1,"<1 day"];
	if(diffDays === 1) return [0,"1 day"];
	return [0,diffDays+" days"];
};