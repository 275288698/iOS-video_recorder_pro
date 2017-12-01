static char* BEAUTIFY_FRAGMENT_SHADER =
"#version 100                                                                                                         \n"
"#ifdef GL_ES                                                                                                         \n"
"precision highp float;                                                                                               \n"
"#endif                                                                                                               \n"
"                                                                                                                     \n"
"uniform sampler2D yuvTexSampler;                                                                                     \n"
"uniform vec4 beautyFactors;                                                                                          \n"
"uniform float textureWidth;                                                                                          \n"
"uniform float textureHeight;                                                                                         \n"
"                                                                                                                     \n"
"varying highp vec2 coordinate;                                                                                       \n"
"                                                                                                                     \n"
"void main() {                                                                                                        \n"
"    vec3 centralColor;                                                                                               \n"
"    float sampleColor;                                                                                               \n"
"    vec2 blurCoordinates[20];                                                                                        \n"
"    float mul = 2.0;                                                                                                 \n"
"    float mul_x = mul / textureWidth;                                                                                \n"
"    float mul_y = mul / textureHeight;                                                                               \n"
"                                                                                                                     \n"
"    blurCoordinates[0] = coordinate + vec2(0.0 * mul_x,-10.0 * mul_y);                                               \n"
"    blurCoordinates[1] = coordinate + vec2(5.0 * mul_x,-8.0 * mul_y);                                                \n"
"    blurCoordinates[2] = coordinate + vec2(8.0 * mul_x,-5.0 * mul_y);                                                \n"
"    blurCoordinates[3] = coordinate + vec2(10.0 * mul_x,0.0 * mul_y);                                                \n"
"    blurCoordinates[4] = coordinate + vec2(8.0 * mul_x,5.0 * mul_y);                                                 \n"
"    blurCoordinates[5] = coordinate + vec2(5.0 * mul_x,8.0 * mul_y);                                                 \n"
"    blurCoordinates[6] = coordinate + vec2(0.0 * mul_x,10.0 * mul_y);                                                \n"
"    blurCoordinates[7] = coordinate + vec2(-5.0 * mul_x,8.0 * mul_y);                                                \n"
"    blurCoordinates[8] = coordinate + vec2(-8.0 * mul_x,5.0 * mul_y);                                                \n"
"    blurCoordinates[9] = coordinate + vec2(-10.0 * mul_x,0.0 * mul_y);                                               \n"
"    blurCoordinates[10] = coordinate + vec2(-8.0 * mul_x,-5.0 * mul_y);                                              \n"
"    blurCoordinates[11] = coordinate + vec2(-5.0 * mul_x,-8.0 * mul_y);                                              \n"
"    blurCoordinates[12] = coordinate + vec2(0.0 * mul_x,-6.0 * mul_y);                                               \n"
"    blurCoordinates[13] = coordinate + vec2(-4.0 * mul_x,-4.0 * mul_y);                                              \n"
"    blurCoordinates[14] = coordinate + vec2(-6.0 * mul_x,0.0 * mul_y);                                               \n"
"    blurCoordinates[15] = coordinate + vec2(-4.0 * mul_x,4.0 * mul_y);                                               \n"
"    blurCoordinates[16] = coordinate + vec2(0.0 * mul_x,6.0 * mul_y);                                                \n"
"    blurCoordinates[17] = coordinate + vec2(4.0 * mul_x,4.0 * mul_y);                                                \n"
"    blurCoordinates[18] = coordinate + vec2(6.0 * mul_x,0.0 * mul_y);                                                \n"
"    blurCoordinates[19] = coordinate + vec2(4.0 * mul_x,-4.0 * mul_y);                                               \n"
"                                                                                                                     \n"
"    centralColor = texture2D(yuvTexSampler, coordinate).rgb;                                                         \n"
"    sampleColor = centralColor.g * 22.0;                                                                             \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[0]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[1]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[2]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[3]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[4]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[5]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[6]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[7]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[8]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[9]).g;                                                   \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[10]).g;                                                  \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[11]).g;                                                  \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[12]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[13]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[14]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[15]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[16]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[17]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[18]).g * 2.0;                                            \n"
"    sampleColor += texture2D(yuvTexSampler, blurCoordinates[19]).g * 2.0;                                            \n"
"    sampleColor = sampleColor/50.0;                                                                                  \n"
"                                                                                                                     \n"
"    float dis = centralColor.g - sampleColor + 0.5;                                                                  \n"
"    if (dis <= 0.5) {                                                                                                \n"
"        dis = dis * dis * 2.0;                                                                                       \n"
"    } else {                                                                                                         \n"
"        dis = 1.0 - ((1.0 - dis)*(1.0 - dis) * 2.0);                                                                 \n"
"    }                                                                                                                \n"
"                                                                                                                     \n"
"    if (dis <= 0.5) {                                                                                                \n"
"        dis = dis * dis * 2.0;                                                                                       \n"
"    } else {                                                                                                         \n"
"        dis = 1.0 - ((1.0 - dis)*(1.0 - dis) * 2.0);                                                                 \n"
"    }                                                                                                                \n"
"                                                                                                                     \n"
"    if (dis <= 0.5) {                                                                                                \n"
"        dis = dis * dis * 2.0;                                                                                       \n"
"    } else {                                                                                                         \n"
"        dis = 1.0 - ((1.0 - dis)*(1.0 - dis) * 2.0);                                                                 \n"
"    }                                                                                                                \n"
"                                                                                                                     \n"
"    if (dis <= 0.5) {                                                                                                \n"
"        dis = dis * dis * 2.0;                                                                                       \n"
"    } else {                                                                                                         \n"
"        dis = 1.0 - ((1.0 - dis)*(1.0 - dis) * 2.0);                                                                 \n"
"    }                                                                                                                \n"
"                                                                                                                     \n"
"    if (dis <= 0.5) {                                                                                                \n"
"        dis = dis * dis * 2.0;                                                                                       \n"
"    } else {                                                                                                         \n"
"        dis = 1.0 - ((1.0 - dis)*(1.0 - dis) * 2.0);                                                                 \n"
"    }                                                                                                                \n"
"                                                                                                                     \n"
"    float aa = 1.03;                                                                                                 \n"
"    vec3 smoothColor = centralColor*aa - vec3(dis)*(aa-1.0);                                                         \n"
"                                                                                                                     \n"
"    float hue = dot(smoothColor, vec3(0.299,0.587,0.114));                                                           \n"
"                                                                                                                     \n"
"    float huePow = pow(hue, beautyFactors.x);                                                                        \n"
"    aa = 1.0 + huePow*0.1;                                                                                           \n"
"    smoothColor = centralColor*aa - vec3(dis)*(aa-1.0);                                                              \n"
"                                                                                                                     \n"
"    smoothColor.r = clamp(pow(smoothColor.r, beautyFactors.y),0.0,1.0);                                              \n"
"    smoothColor.g = clamp(pow(smoothColor.g, beautyFactors.y),0.0,1.0);                                              \n"
"    smoothColor.b = clamp(pow(smoothColor.b, beautyFactors.y),0.0,1.0);                                              \n"
"                                                                                                                     \n"
"    vec3 lvse = vec3(1.0)-(vec3(1.0)-smoothColor)*(vec3(1.0)-centralColor);                                          \n"
"    vec3 bianliang = max(smoothColor, centralColor);                                                                 \n"
"    vec3 temp = 2.0*centralColor*smoothColor;                                                                        \n"
"    vec3 rouguang = temp + centralColor*centralColor - temp*centralColor;                                            \n"
"                                                                                                                     \n"
"    gl_FragColor = vec4(mix(centralColor, lvse, huePow), 1.0);                                                       \n"
"    gl_FragColor.rgb = mix(gl_FragColor.rgb, bianliang, huePow);                                                     \n"
"    gl_FragColor.rgb = mix(gl_FragColor.rgb, rouguang, beautyFactors.z);                                             \n"
"                                                                                                                     \n"
"    mat3 saturateMatrix = mat3(1.1102, -0.0598, -0.061, -0.0774, 1.0826, -0.1186, -0.0228, -0.0228, 1.1772);         \n"
"    vec3 satcolor = gl_FragColor.rgb * saturateMatrix;                                                               \n"
"    gl_FragColor.rgb = mix(gl_FragColor.rgb, satcolor, beautyFactors.w);                                             \n"
"}                                                                                                                    \n";