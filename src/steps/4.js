const Step = () => {
  return (
    <svg width={700} height={248} fill="none">
      <path
        d="M100 196.25a.75.75 0 000 1.5v-1.5zm480.53 1.28a.749.749 0 000-1.06l-4.773-4.773a.749.749 0 10-1.06 1.06l4.242 4.243-4.242 4.243a.749.749 0 101.06 1.06l4.773-4.773zm-480.53.22h480v-1.5H100v1.5z"
        fill="#1A1B22"
      />
      <g stroke="#1A1B22">
        <path d="M340 197v-24a4 4 0 014-4h13M356 169h220" />
      </g>
      <circle cx={340} cy={197} r={7.25} fill="#F5F5F7" stroke="#1A1B22" />
      <text fill="#1A1B22" fontStyle="italic" letterSpacing={0}>
        <tspan x={564.069} y={227.102}>
          {" x "}
        </tspan>
      </text>
      <text fill="#1A1B22" letterSpacing={0}>
        <tspan x={329.161} y={227.167}>
          {" \u20132 "}
        </tspan>
      </text>
      <path
        d="M284.609 123.509c.167-1.003.812-2.161 1.935-3.475s2.509-1.983 4.157-2.007a4.26 4.26 0 012.293.645c.693.43 1.207.967 1.541 1.612 1.004-1.505 2.21-2.257 3.62-2.257.883 0 1.648.263 2.293.788.645.526.979 1.231 1.003 2.114 0 .693-.167 1.255-.501 1.685-.335.43-.657.692-.968.788a2.832 2.832 0 01-.824.143c-.454 0-.824-.131-1.111-.394-.287-.263-.43-.609-.43-1.039 0-1.099.597-1.851 1.792-2.258-.263-.31-.741-.465-1.434-.465-.31 0-.537.023-.681.071-.907.382-1.576 1.171-2.006 2.365-1.434 5.28-2.15 8.362-2.15 9.246 0 .668.191 1.146.573 1.433.382.287.8.43 1.254.43.884 0 1.756-.394 2.616-1.183a5.977 5.977 0 001.756-2.902c.072-.239.143-.37.215-.394.072-.024.263-.048.573-.072h.144c.358 0 .537.096.537.287 0 .024-.024.155-.071.394-.383 1.361-1.123 2.568-2.222 3.619-1.099 1.051-2.377 1.577-3.834 1.577-1.673 0-2.939-.753-3.799-2.258-.979 1.481-2.102 2.222-3.368 2.222h-.215c-1.171 0-2.007-.311-2.509-.932-.501-.621-.764-1.278-.788-1.971 0-.764.227-1.385.681-1.863.454-.478.991-.717 1.612-.717 1.028 0 1.541.502 1.541 1.505 0 .478-.143.896-.43 1.255-.286.358-.561.597-.824.716-.263.12-.418.179-.466.179l-.107.036c0 .024.071.072.215.144.143.071.334.155.573.25a1.4 1.4 0 00.681.108c.86 0 1.601-.538 2.222-1.613.215-.382.489-1.194.824-2.436.334-1.243.669-2.533 1.003-3.87a87.56 87.56 0 00.574-2.366c.119-.645.179-1.11.179-1.397 0-.669-.179-1.147-.538-1.433a1.895 1.895 0 00-1.218-.43c-.956 0-1.852.382-2.688 1.146-.836.765-1.421 1.744-1.756 2.939-.047.215-.107.334-.179.358-.071.024-.263.048-.573.072h-.502c-.143-.144-.215-.275-.215-.395zM316.208 115.232a.72.72 0 01.143-.466c.096-.119.191-.191.287-.215l.107-.036c.167 0 2.007.824 5.519 2.473 3.511 1.648 6.987 3.284 10.427 4.909l5.125 2.473c.167.119.25.298.25.537 0 .239-.083.418-.25.538-.048.047-3.536 1.708-10.464 4.98l-10.32 4.874h-.215c-.43-.048-.645-.287-.645-.717v-.107c-.024-.167.155-.359.537-.574.454-.238 2.246-1.098 5.375-2.58a531.548 531.548 0 014.659-2.186l8.887-4.228-8.887-4.228c-6.88-3.249-10.368-4.934-10.464-5.053a.907.907 0 01-.071-.394zM354.041 125.373v-.466c0-.311.167-.549.502-.717h20.82c.358.191.537.43.537.717s-.179.526-.537.717h-20.82c-.335-.168-.502-.406-.502-.717v.466zM382.816 118.493c-.645 0-1.158-.215-1.54-.645-.383-.43-.574-.956-.574-1.577 0-1.696.633-3.165 1.899-4.408 1.267-1.242 2.843-1.863 4.731-1.863 2.174 0 3.989.669 5.446 2.007 1.458 1.338 2.198 3.07 2.222 5.196a6.353 6.353 0 01-.717 2.938 10.115 10.115 0 01-1.72 2.437c-.669.693-1.624 1.577-2.866 2.652-.86.74-2.055 1.839-3.584 3.296l-2.114 2.007 2.723.036c3.751 0 5.746-.06 5.985-.179.167-.048.454-1.111.86-3.19v-.107H395v.107c-.024.072-.179 1.159-.466 3.261-.286 2.103-.466 3.202-.537 3.297v.108h-13.295v-1.111c0-.168.072-.347.215-.538.144-.191.502-.609 1.075-1.254.693-.764 1.29-1.433 1.792-2.007.215-.239.621-.681 1.218-1.326a162.23 162.23 0 001.219-1.325c.215-.239.561-.634 1.039-1.183.478-.549.812-.956 1.003-1.218.191-.263.466-.621.824-1.075.359-.454.61-.836.753-1.147.143-.311.322-.657.538-1.039.215-.382.37-.765.465-1.147.096-.382.18-.741.251-1.075.072-.334.108-.729.108-1.182 0-1.506-.406-2.807-1.219-3.906-.812-1.099-1.971-1.649-3.476-1.649-.788 0-1.481.203-2.078.609-.597.407-1.015.801-1.254 1.183-.239.382-.359.609-.359.681 0 .024.06.036.18.036.43 0 .872.167 1.326.501.453.335.68.884.68 1.649 0 .597-.191 1.099-.573 1.505-.382.406-.92.621-1.613.645z"
        fill="#000"
      />
    </svg>
  )
}

export default Step