import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 1300,
  },
  {
    id: 2,
    title: "Payment Received",
    badge: "Sarah Williams",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 850,
  },
  {
    id: 3,
    title: "Invoice Paid",
    badge: "David Brown",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 420,
  },
  {
    id: 4,
    title: "Refund Issued",
    badge: "Emily Davis",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 150,
  },
  {
    id: 5,
    title: "One-time Purchase",
    badge: "James Wilson",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 299,
  },
];

const popularContent = [
  {
    id: 6,
    title: "New User Signup",
    badge: "Olivia Martinez",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 980,
  },
  {
    id: 7,
    title: "Product Purchase",
    badge: "Liam Anderson",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 670,
  },
  {
    id: 8,
    title: "Trial Started",
    badge: "Sophia Thomas",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 540,
  },
  {
    id: 9,
    title: "Upgrade Plan",
    badge: "Noah Taylor",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 760,
  },
  {
    id: 10,
    title: "Download Report",
    badge: "Isabella Moore",
    image: "https://images.pexels.com/photos/36867622/pexels-photo-36867622.jpeg",
    count: 310,
  },
];

const CardList = ({title}:{title:string}) => {
    const list = title === "Popular Content" ? popularContent : latestTransactions
  return (
    <div className="">
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className="flex flex-col gap-2">
            {list.map(item=>(
                <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                    <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                        <Image src={item.image} alt={item.title} fill sizes="48px" className="object-cover"/>
                    </div>
                    <CardContent className="flex-1 p-0">
                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                        <Badge variant="secondary">{item.badge}</Badge>
                    </CardContent>
                    <CardFooter className="p-0">{item.count/1000}K</CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default CardList