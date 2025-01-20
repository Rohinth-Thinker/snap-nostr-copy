export function trackEvent(eventName: string, postId?: string ): void {
    if (postId && window.mixpanel) {
      window.mixpanel.track(eventName, { postId });
    }
}