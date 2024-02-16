import { useEffect, useState } from "react"

export default function Greeting({ nicknames }: { nicknames: string[] }) {
  const [nickname, setNickname] = useState("")

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * nicknames.length)
    const selectedNickname = nicknames[randomIndex]

    setNickname(selectedNickname)
  }, [])

  return <h1 className="text-sm text-gray-700">Greetings, {nickname}!</h1>
}
