import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, CitrusIcon, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLineChart from "@/components/AppLineChart"

const SingleUserPage = () => {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/*Container*/}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/*Left*/}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/*User badges container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features and can manage users.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This user hyas been awarded for their contribution.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <CitrusIcon size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">This user has been popular in the community</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/*Information container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>
                                        Edit User
                                    </Button>
                                </SheetTrigger>
                                <EditUser/>
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <div className="text-sm text-muted-foreground">Profile completion</div>
                                <Progress value={66} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span className="">John Doe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span className="">jd@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span className="">01xxxxxxxxxx</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span className="">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 2026.01.01</p>
                    </div>
                    {/*Card list container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/*Right*/}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User card container */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src={"/man-user-circle-icon.webp"}/>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dignissimos natus dicta fuga ipsum eligendi neque minus, dolore iure ea facilis nulla? Cupiditate totam optio accusamus ratione, amet quidem consequatur?</p>
                    </div>
                    {/* Chart container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Activity</h1>
                        <AppLineChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage