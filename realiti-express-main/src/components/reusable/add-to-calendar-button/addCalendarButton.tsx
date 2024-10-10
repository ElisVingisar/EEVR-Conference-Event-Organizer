'use client'

import { AddToCalendarButton } from 'add-to-calendar-button-react'
import { createEvent, EventAttributes } from 'ics'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { google, outlook, office365, yahoo, ics, CalendarEvent } from 'calendar-link'
import { CalendarDays } from 'lucide-react'

import dynamic from 'next/dynamic'

function AddCalendarButtonRaw() {
  const getOperatingSystem = () => {
    try {
      const platform = window.navigator.platform.toLowerCase()

      if (platform.includes('win')) {
        return 'Windows'
      }
      if (platform.includes('mac')) {
        return 'MacOS'
      }
      if (platform.includes('linux')) {
        return 'Linux'
      }
      if (platform.includes('iphone') || platform.includes('ipad')) {
        return 'iOS'
      }
      if (platform.includes('android')) {
        return 'Android'
      }
      return 'Unknown'
    } catch (error) {
      console.error('Failed to get operating system:', error)
      return 'Unknown'
    }
  }

  const handleAddToCalendar = () => {
    // Event details with hardcoded dates
    const eventDetailsICS: EventAttributes = {
      title: 'Realiti.express XR conference',
      description: 'realiti.express - Everything XR in the Baltics',
      start: [2024, 10, 18, 10, 0], // October 18, 2024, 10:00 AM
      end: [2024, 10, 19, 23, 0], // October 19, 2024, 11:00 PM
      location: 'House 10 • Rataskaevu 10, 10123 Tallinn, Harjumaa',
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
    }
    // Create the ICS file
    createEvent(eventDetailsICS, (error, value) => {
      if (error) {
        console.error('Failed to create ICS:', error)
        return
      }
      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'annual-conference.ics'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }
  const eventDetailsDropdown: CalendarEvent = {
    title: 'Realiti.express XR conference',
    description: 'realiti.express - Everything XR in the Baltics',
    start: '2024-10-18 10:00:00 GMT+0300',
    duration: [37, 'hours'],
    location: 'House 10 • Rataskaevu 10, 10123 Tallinn, Harjumaa',
  }

  const googleUrl = google(eventDetailsDropdown)
  const outlookUrl = outlook(eventDetailsDropdown)
  const office365Url = office365(eventDetailsDropdown)
  const yahooUrl = yahoo(eventDetailsDropdown)
  const icsUrl = ics(eventDetailsDropdown)

  if (getOperatingSystem() === 'Windows' || getOperatingSystem() === 'MacOS') {
    return (
      <>
        {/* if operating system  or android then hide popover otherwie block*/}

        {/* if operating system ios or android then hide popover hidden otherwie block*/}
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center justify-center w-56 h-12 gap-2  rounded-full border-2 hover:bg-realiti-gray-light text-realiti-gray-light font-medium hover:text-realiti-blue2">
              <span>Add event to calendar</span>
              <CalendarDays className='-translate-y-[10%]' />
            </div>
          </PopoverTrigger>
          <PopoverContent className="max-w-32">
            <div className="flex flex-col space-y-2">
              <a href={googleUrl} target="_blank" rel="noreferrer">
                Google
              </a>
              <a href={outlookUrl} target="_blank" rel="noreferrer">
                Outlook
              </a>
              <a href={office365Url} target="_blank" rel="noreferrer">
                Office 365
              </a>
              <a href={yahooUrl} target="_blank" rel="noreferrer">
                Yahoo
              </a>
              <a href={icsUrl} target="_blank" rel="noreferrer">
                ICS
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </>
    )
  } else {
    return (
      <>
        <div onClick={handleAddToCalendar} className="flex items-center justify-center w-56 h-12 gap-2  rounded-full border-2 hover:bg-realiti-gray-light text-realiti-gray-light font-medium hover:text-realiti-blue2">
          <span>Add event to calendar</span>
          <CalendarDays className='-translate-y-[10%]' />
        </div>
      </>
    )
  }
}

const AddCalendarButton = dynamic(() => Promise.resolve(AddCalendarButtonRaw), {
  ssr: false,
})

export default AddCalendarButton