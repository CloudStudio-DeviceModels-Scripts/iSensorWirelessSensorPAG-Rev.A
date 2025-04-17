function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


  

        //variables PAG ABAJO
        var mA = device.endpoints.byAddress(1);
        
        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

        
        



       
        
 

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "sensor_mA_PAG"){
            const datos = jsonPayload;
            
            var dato1 =datos.mA;
            

            
            mA.updateWeightSensorStatus(dato1,timestamp);
            env.log("Valor  --> ",dato1);
            
                            
                                                         
    }



  
}