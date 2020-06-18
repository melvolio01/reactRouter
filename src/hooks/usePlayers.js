import useFetch from './useFetch'

export default function usePlayers(team) {
  console.log(`usePlayers, team: ${team}`)
  return useFetch('/players', 'POST', JSON.stringify({ team }))
}