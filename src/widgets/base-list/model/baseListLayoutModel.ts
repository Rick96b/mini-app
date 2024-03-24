import { Achievements, addAchievementToCommand } from "entities/achievements"
import { Events, addEventToCommand } from "entities/events"

export type BaseListItem = {
    name: string,
    imageLink: string,
    text: string,
    rating: number,
    commandName: string | undefined
}

export type itemsType = 'Events' | 'Achievements'

export const SubmitFunctions = {
    'Events': (event: Events, commandName: string) => addEventToCommand(event, commandName),
    'Achievements': (achievement: Achievements, commandName: string) => addAchievementToCommand(
        achievement, commandName
    )
}

