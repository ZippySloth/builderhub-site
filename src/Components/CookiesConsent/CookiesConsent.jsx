"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [showSettingsButton, setShowSettingsButton] = useState(false)

  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const hasConsented = localStorage.getItem("buildrhub-cookie-consent")
    if (!hasConsented) {
      setShowConsent(true)
    } else {
      setShowSettingsButton(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(newPrefs)
    setPreferences(newPrefs)
    setShowConsent(false)
    setShowPreferences(false)
    setShowSettingsButton(false) // This will hide the settings button
  }

  const handleRejectAll = () => {
    const newPrefs = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    savePreferences(newPrefs)
    setPreferences(newPrefs)
    setShowConsent(false)
    setShowPreferences(false)
    setShowSettingsButton(false) // This will hide the settings button
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
    setShowConsent(false)
    setShowPreferences(false)
    setShowSettingsButton(false) // This will hide the settings button
  }

  const savePreferences = (prefs) => {
    localStorage.setItem("buildrhub-cookie-consent", "true")
    localStorage.setItem("buildrhub-cookie-preferences", JSON.stringify(prefs))
    // Here you'd implement logic to actually manage cookies
  }

  const handleTogglePreference = (key) => {
    if (key === "necessary") return
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      {/* 🍪 Cookie Banner */}
      {showConsent && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0a0d14] border-t border-gray-800 shadow-lg">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">We value your privacy</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                  traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(true)}
                  className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Customize
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Reject All
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto bg-white hover:bg-gray-200 text-[#0a0d14]"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ⚙️ Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[500px] bg-[#0a0d14] text-white border-gray-800">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Necessary cookies are required for the website to function properly.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="essential" className="mt-4">
            <TabsList className="grid grid-cols-4 bg-gray-800">
              <TabsTrigger value="essential">Essential</TabsTrigger>
              <TabsTrigger value="functional">Functional</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="essential" className="p-4 text-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-400">Required for the site to function.</p>
                </div>
                <Switch checked={preferences.necessary} disabled />
              </div>
            </TabsContent>

            <TabsContent value="functional" className="p-4 text-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Functional Cookies</h4>
                  <p className="text-sm text-gray-400">Enhance functionality and preferences.</p>
                </div>
                <Switch checked={preferences.functional} onCheckedChange={() => handleTogglePreference("functional")} />
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="p-4 text-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-gray-400">Help us understand usage patterns.</p>
                </div>
                <Switch checked={preferences.analytics} onCheckedChange={() => handleTogglePreference("analytics")} />
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="p-4 text-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-400">Used to serve personalized ads.</p>
                </div>
                <Switch checked={preferences.marketing} onCheckedChange={() => handleTogglePreference("marketing")} />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowPreferences(false)}>Cancel</Button>
            <Button onClick={handleSavePreferences} className="bg-white hover:bg-gray-200 text-[#0a0d14]">
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ⚙️ Reopen Settings Button (if already accepted) */}
      {showSettingsButton && (
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 z-40 opacity-70 hover:opacity-100 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          onClick={() => {
            setShowConsent(true)
            setShowPreferences(false)
          }}
        >
          Cookie Settings
        </Button>
      )}
    </>
  )
}

export default CookiesConsent