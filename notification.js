// Notification module for Prime Project Planner

export class NotificationService {
  constructor() {
    this.notifications = [];
  }
  
  send(message) {
    this.notifications.push(message);
  }
}
