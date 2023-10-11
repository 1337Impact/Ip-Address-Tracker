import { reactive } from 'vue'

export const location = reactive<{
    lat: number
    lng: number
    ipAddress: string
    location: string
    timezone: string
    isp: string
  }>({
    lat: 32.882929827006194,
    lng: -6.897893075712096,
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC-05:00",
    isp: "SpaceX Starlink"
})