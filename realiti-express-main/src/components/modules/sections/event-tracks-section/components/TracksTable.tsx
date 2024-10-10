"use client";

import { motion } from "framer-motion";

import * as Tabs from '@radix-ui/react-tabs';
import { EventTracksContent } from "../content";

type EventCardData = {
    start: number
    end: number
    title: string
    kind?: 'food' | 'speach' | 'interactive'
    columnStart: number
    columnEnd: number
    location?: string
}

const events: EventCardData[] = [
    {
        start: 9.5,
        end: 12,
        title: 'Keyotes',
        columnStart: 1,
        columnEnd: 3,
    },
    {
        start: 10,
        end: 17,
        title: 'Demo in demo room',
        columnStart: 3,
        columnEnd: 4,
        location: 'Demo Area'
    },
    {
        start: 12,
        end: 13,
        title: 'Coffee, Lunch',
        kind: 'food',
        columnStart: 1,
        columnEnd: 3,
        location: 'House 10'
    },
    {
        start: 13,
        end: 15,
        title: 'Theme Block 1: Gaming & Entertainment',
        kind: 'speach',
        columnStart: 1,
        columnEnd: 2,
        location: 'House 10'
    },
    {
        start: 13,
        end: 15,
        title: 'Theme Block 2: Improving Public Services through XR: Spatial Planning, Digital Twins',
        kind: 'speach',
        columnStart: 2,
        columnEnd: 3,
        location: 'House 10'
    },
    {
        start: 15,
        end: 16,
        title: 'Presentation and heated debate: XR and AI',
        kind: 'interactive',
        columnStart: 1,
        columnEnd: 3,
        location: 'House 10'
    },
    {
        start: 16,
        end: 18,
        title: 'Theme Block 3: Building XR Products for the Global Market',
        kind: 'speach',
        columnStart: 1,
        columnEnd: 2,
        location: 'House 10'
    },
    {
        start: 16,
        end: 18,
        title: 'Theme Block 4: Using XR for Education & Training',
        kind: 'speach',
        columnStart: 2,
        columnEnd: 3,
        location: 'House 10'
    },
    {
        start: 19,
        end: 22,
        title: 'Dinner and Party After. Explore the Telliskivi Industrial Partyland',
        kind: 'food',
        columnStart: 1,
        columnEnd: 3,
        location: 'TBD'

    },
]

// 18 October, Friday
// 9:30-12
// KEYNOTES
// 10am-5pm
// Demos in Demo Rooms
// 12-1pm
// Coffee, Lunch
// 1-3pm
// THEME BLOCK 1: Gaming & Entertainment
// 1-3pm
// THEME BLOCK 2: Improving Public Services through XR: Spatial Planning, Digital Twins
// 3:10-3:50pm
// Presentation and heated debate: XR and AI
// 4-6pm
// THEME BLOCK 3: Building XR Products for the Global Market
// 4-6pm
// THEME BLOCK 4: Using XR for Education & Training
// 7-10pm
// Dinner and Party After. Explore the Telliskivi Industrial Partyland
// 19 October, Saturday
// 10-12pm
// Brunch in Old Town
// 12-2pm
// WORKSHOP: Developing for Apple Vision Pro
// 12-2pm
// WORKSHOP: Game Design Deep Dive
// 2-4pm
// WORKSHOP: Virtual Worlds and Avatars
// 2-4pm
// WORKSHOP: Selling Abroad using LinkedIn
// 10pm-4am
// MängudeÖÖ - Estonia's largest gaming festival in Apollo Cinema Ülemiste

const eventsDay2: EventCardData[] = [
    {
        start: 10,
        end: 12,
        title: 'Brunch in Old Town',
        columnStart: 1,
        columnEnd: 3,
        location: 'TBA'
    },
    {
        start: 12,
        end: 14,
        title: 'WORKSHOP: Developing for Apple Vision Pro',
        columnStart: 1,
        columnEnd: 2,
        location: 'TBA'
    },
    {
        start: 12,
        end: 14,
        title: 'WORKSHOP: Game Design Deep Dive',
        columnStart: 2,
        columnEnd: 3,
        location: 'TBA'
    },
    {
        start: 14,
        end: 16,
        title: 'WORKSHOP: Virtual Worlds and Avatars',
        columnStart: 1,
        columnEnd: 2,
        location: 'TBA'
    },
    {
        start: 14,
        end: 16,
        title: 'WORKSHOP: Selling Abroad using LinkedIn',
        columnStart: 2,
        columnEnd: 3,
        location: 'TBA'
    },
    {
        start: 22,
        end: 4,
        title: 'MängudeÖÖ - Estonia\'s largest gaming festival in Apollo Cinema Ülemiste',
        columnStart: 1,
        columnEnd: 3,
        location: 'Apollo Cinema Ülemiste'
    },
]


function formatTime(time: Date) {
    // const hours = Math.floor(time);
    // const minutes = Math.floor((time - hours) * 60);
    // return <span className="relative">{hours}
    //     {minutes > 0 && <span className="text-xs font-medium">:{minutes.toString().padStart(2, '0')}</span>}
    // </span>

    // Extrach hours and minutes and convert to UTC+3
    const date = new Date(time);

    const hours = date.getUTCHours() + 3;
    const minutes = date.getUTCMinutes();

    return <span className="relative">{hours}
        {minutes > 0 && <span className="text-xs font-medium">:{minutes.toString().padStart(2, '0')}</span>}
    </span>
}


export function TracksTable({ content }: { content: EventTracksContent }) {
    return (
        <div className="">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Friday, Oct 18</h2>

            <div className="overflow-x-auto  mb-16 ">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 w-24">Time</th>
                            <th className="px-4 py-2 min-w-80">Track</th>
                            <th className="px-4 py-2 w-20">Date</th>
                            <th className="px-4 py-2 w-32">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.day1.map((event, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 ">
                                    {event.hourStart && formatTime(event.hourStart)}
                                    {event.hourEnd && event.hourStart && <span className="text-xs font-medium"> - </span>}
                                    {event.hourEnd && formatTime(event.hourEnd)}
                                </td>
                                <td className="border px-4 py-2">{event.title}</td>
                                <td className="border px-4 py-2">Oct 18</td>
                                <td className="border px-4 py-2">{event.location ?? "TBA"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-right">Saturday, Oct 19</h2>
            <div className="overflow-x-auto  mb-16">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 w-24">Time</th>
                            <th className="px-4 py-2 min-w-80">Track</th>
                            <th className="px-4 py-2 w-20">Date</th>
                            <th className="px-4 py-2 w-32">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.day2.map((event, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 ">
                                    {event.hourStart && formatTime(event.hourStart)}
                                    {event.hourEnd && event.hourStart && <span className="text-xs font-medium"> - </span>}
                                    {event.hourEnd && formatTime(event.hourEnd)}
                                </td>                                <td className="border px-4 py-2 min-w-64">{event.title}</td>
                                <td className="border px-4 py-2">Oct 19</td>
                                <td className="border px-4 py-2">{event.location ?? "TBA"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
}