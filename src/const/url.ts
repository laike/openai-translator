import urlJoin from 'url-join'

import { INBOX_SESSION_ID } from './session'

export const GITHUB = ''
export const CHANGELOG = urlJoin(GITHUB, 'blob/master/CHANGELOG.md')
export const WIKI = urlJoin(GITHUB, 'wiki')
export const WIKI_PLUGIN_GUIDE = urlJoin(WIKI, 'Plugin-Development')
export const ABOUT = ''
export const FEEDBACK = ''
export const DISCORD = 'https://discord.gg/AYFPHvv2jT'

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com'

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents'
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new')

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
    mobile ? `/chat/mobile#session=${id}` : `/chat#session=${id}`
export const MANUAL_UPGRADE_URL = 'https://github.com/lobehub/lobe-chat/wiki/Upstream-Sync'
