export function trackEvent(eventName: string, postId: string ): void {
    if (postId) {
      mixpanel.track(eventName, { postId })
    }
}