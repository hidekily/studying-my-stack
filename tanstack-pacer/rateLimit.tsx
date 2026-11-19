import {useRateLimiter} from "@tanstack/react-pacer"

// essa const era p estar dentro de uma function (esqueci de fzr)
const limiter = useRateLimiter(yourEvent, {
    limit: 3,
    window: 1000,
    windowType: "fixed" || "sliding",
    // fixed faz: quando a primeira execucao eh aceita, todas as outras execucoes sao contabilizadas
    //sliding faz: quando qualquer execucao eh aceita, todas as demais execucoes anteriores saem do batch (nao contam)
    onReject: (limiter) =>{
      console.log('Rejected calls', limiter.store.state.rejectionCount) // o onReject mostra oq vc quer quando a call for recusada
    },
    onExecute: (args, limiter) => {
      console.log('Sent:', args)
      console.log('Remaining:', limiter.getRemainingInWindow())
    }, // recebe se a call eh valida ou nao e mostra o quanto falta 
})

  limiter.getRemainingInWindow() // Accepted executions still available.
  limiter.getMsUntilNextWindow() // Time until at least one execution is available.
  limiter.reset() // reseta tudo, o limiter volta para a capacidade max
  limiter.setOptions({
    limit: 10,
    window: 30_000,
  }) // basicamente faz oq vc fez dentro da funcao

// exemplo React

function SendButton() {
  const limit = useRateLimiter(
    sendEvent,
    { limit: 3, window: 10_000 },
    (state) => ({
      rejectionCount: state.rejectionCount,
    }),
  )

  return (
    <button onClick={() => limit.maybeExecute('clicked')}>
      Send ({limit.state.rejectionCount} rejected)
    </button>
  )
}