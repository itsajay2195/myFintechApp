import {createServer} from "miragejs"
import * as React from "react";
import RootNavigation from "./navigation";
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications


if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/user/1", () => {
      return {
        data:{
          user_id:1,
          card_info:{
            card_holder:"Ajaykumar Rajasekaran",
            card_number: "5647 3411 2413 2020",
            thru:"12/20",
            cvv:"456",
            pin:"453",
            available_balance:"3,000"
          }
        }
      }
    })
  },
})

export default function App() {
  return (
    <RootNavigation></RootNavigation>
  );
}