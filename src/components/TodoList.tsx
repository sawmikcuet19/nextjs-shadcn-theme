"use client"
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='w-full'>
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date)=>{
                            setDate(date);
                            setOpen(false);
                        }}
                        className="p-0 w-auto"
                    />
                </PopoverContent>
            </Popover>
            {/*List*/}
            <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
                <div className="flex flex-col gap-4">
                    {/*List item*/}
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' checked />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' checked />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' checked />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' checked />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className="flex items-center gap-4">
                            <Checkbox id='item1' checked />
                            <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur harum possimus quidem temporibus repellat soluta, nulla a vitae ducimus neque provident rem quod officiis, esse natus nisi veritatis blanditiis.</label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList