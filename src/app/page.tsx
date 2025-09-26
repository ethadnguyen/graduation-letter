"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, Heart, MapPin, Phone, Calendar, Clock } from "lucide-react"

type ViewType = "nameForm" | "special"

const SPECIAL_PASSWORD = "13042005"

export default function GraduationInvitation() {
  const [currentView, setCurrentView] = useState<ViewType>("nameForm")
  const [nameInput, setNameInput] = useState("")
  const [guestName, setGuestName] = useState("")
  const [error, setError] = useState("")

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (nameInput === SPECIAL_PASSWORD) {
      setCurrentView("special")
      document.body.classList.add("special-theme")
      return
    }

    if (nameInput.trim()) {
      setGuestName(nameInput.trim())
      setError("")
    } else {
      setError("Vui lòng nhập tên của bạn!")
    }
  }

  const resetToNameForm = () => {
    setCurrentView("nameForm")
    setNameInput("")
    setGuestName("")
    setError("")
    document.body.classList.remove("special-theme")
  }

  if (currentView === "nameForm") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 animate-float">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{"Lễ Tốt Nghiệp"}</h1>
              <p className="text-lg text-muted-foreground font-medium">{"Trí Nguyên"}</p>
            </div>

            {!guestName ? (
              <form onSubmit={handleNameSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    {"Tên của bạn"}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Nhập tên của bạn..."
                    className="mt-1"
                    required
                  />
                </div>

                {error && <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}

                <Button type="submit" className="w-full">
                  {"Xác nhận"}
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{"Chào " + guestName + "!"}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {"Mình chân thành mời bạn tham dự lễ tốt nghiệp để cùng nhau kỷ niệm khoảnh khắc đặc biệt này!"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Thời gian"}</p>
                      <p className="text-muted-foreground">{"11/10/2025"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Giờ"}</p>
                      <p className="text-muted-foreground">{"16:00"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Địa điểm"}</p>
                      <p className="text-muted-foreground">{"Hội trường rùa, khu II, Đại học Cần Thơ"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Liên hệ"}</p>
                      <p className="text-muted-foreground">{"0777005335"}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-base text-foreground mb-4">
                    {"Sự có mặt của bạn sẽ làm cho ngày đặc biệt này trở nên ý nghĩa hơn!"}
                  </p>
                  <p className="text-lg font-semibold text-primary">{"Trân trọng,"}</p>
                  <p className="text-xl font-bold text-foreground mt-2">{"Trí Nguyên"}</p>
                </div>

                <Button onClick={resetToNameForm} variant="outline" className="w-full bg-transparent">
                  {"Quay lại"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // Special Invitation for Hồng Ngoan
  if (currentView === "special") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6 animate-float">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                {"Dành Riêng Cho Em"}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">{"Hồng Ngoan"}</h2>
              <p className="text-xl text-muted-foreground">{"Lời mời đặc biệt từ Trí Nguyên"}</p>
            </div>

            {/* Main Content */}
            <Card className="mb-8 overflow-hidden shadow-xl border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <p className="text-lg text-primary font-medium leading-relaxed mb-6">
                    {"Gửi đến em,"}
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-6">
                    {
                      "Sau 4 năm, cuối cùng anh cũng đã hoàn thành chương trình đại học. Tuy anh chỉ gặp em vào cuối hành trình này, nhưng thật may mắn khi có em ở vạch đích."
                    }
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-6">
                    {
                      "Anh muốn chia sẻ khoảnh khắc đặc biệt này với em - cảm ơn em vì đã luôn ủng hộ anh."
                    }
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    {
                      "Anh chân thành mời em tham dự lễ tốt nghiệp của anh, để cùng nhau kỷ niệm thành quả này."
                    }
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Thời gian"}</p>
                      <p className="text-muted-foreground">{"11/10/2025"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Giờ"}</p>
                      <p className="text-muted-foreground">{"16:00"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Địa điểm"}</p>
                      <p className="text-muted-foreground">{"Hội trường rùa, khu II, Đại học Cần Thơ"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{"Gọi cho anh"}</p>
                      <p className="text-muted-foreground">{"0777005335"}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-primary/5 p-6 rounded-lg">
                  <p className="text-base text-foreground mb-4 italic">
                    {'"Sự có mặt của em sẽ là món quà quý giá nhất dành cho anh!"'}
                  </p>
                  <p className="text-lg font-semibold text-primary mb-2">{"Chờ em đến,"}</p>
                  <p className="text-xl font-bold text-foreground">{"Trí Nguyên"}</p>
                  <div className="flex justify-center mt-4">
                    <Heart className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button onClick={resetToNameForm} variant="outline" size="lg">
                {"Quay lại"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
