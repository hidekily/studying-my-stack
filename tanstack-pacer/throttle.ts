import { useThrottler } from "@tanstack/react-pacer"

const throttler = useThrottler(updateProgress, {
  wait: 100,
  onExecute: (args, throttler) => {
    console.log('Rendered value:', args[0])
    console.log('Executions:', throttler.store.state.executionCount)
  },
})

// o throttle em si tem mais coisa, mas geralmente esse basicao ai vai resolver 99% dos casos que vc quer