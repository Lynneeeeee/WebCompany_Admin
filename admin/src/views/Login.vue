<!-- Login scene -->

<template>
    <div>
        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="options"
        />
        <div class = "FormContainer">
            <h3> Company Website Demo By Ying</h3>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                status-icon
                :rules="loginRules"
                label-width="90px"
                class="loginform"
            >
                <el-form-item label="UserName" prop="username">
                <el-input v-model="loginForm.username" type="username" autocomplete="off" />
                </el-form-item> 

                <el-form-item label="Password" prop="password">
                <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>

                <el-form-item>
                <el-button type="primary" @click="submitForm()">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { loadSlim } from "tsparticles-slim"
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"
import { ElMessage } from 'element-plus'

// binding a reactive object to form
const loginForm = reactive({
    username: "",
    password: ""
})

const loginRules = reactive({
    username: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input password', triggrt: 'blur'}
    ]
})

const loginFormRef = ref() // the reference object of form

const router = useRouter()

const submitForm = () => {
    // 1. Validate form input, prevent from submit empty form
    // loginRules only validates when blur
    loginFormRef.value.validate((valid)=> {
        // func validate: triggers after a form item is validated
        if(valid){
            // console.log(loginForm) // 2-way binding so can get value from loginForm
            axios.post("/adminapi/user/login", loginForm).then(res=>{
                console.log(res.data)
                if(res.data.ActionType === "OK"){
                    // localStorage.setItem("token", "ManualToken")
                    router.push("/")
                    ElMessage({
                        message: 'Log in successfully',
                        type: 'success',
                    })
                } else {
                    ElMessage.error('Oops, wrong username or password')
                }
            })
        }
    }) 
    // 2. submit form to back end
    // 3. set token
}


const particlesInit = async engine => {
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

// Config particles
const options = {
                    background: {
                        color: {
                            value: '1C1C1C'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        }
                    },
                    detectRetina: true
                }
</script>

<!-- background of FormContainer -->
<style lang = "scss" scoped>
// body{
//     position: relative;
// }
.FormContainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;

    h3{
        font-size: 25px;
        text-shadow: 5px -5px rgba($color: white, $alpha: 0.1);
        font-family: Palatino, URW Palladio L, serif
        // font-style: monospace;
    }
    .loginform{
        margin-top: 20px;
    }
}
::v-deep .el-button{
        width: 400px;
        height: 50px;
        text-align: center;
        font-size: 20px;
        box-sizing: border-box;
        background:
        linear-gradient(90deg, #eaf979, #8aed71, #4fbef6,#8aed71,#eaf979);
        border-radius: 20px;
        background-size: 400%;
        z-index: 1;
    &:hover{
        animation: animate 10s linear infinite;
    }
    @keyframes animate{
        from{
            background-position: 0%;
        }
        to{
            background-position: 400%;
        }
    }
    &::before{
        content: '';
        position: absolute;
        inset: -5px;
        z-index: -1;
        background:
        linear-gradient(90deg, #eaf979, #8aed71, #4fbef6,#8aed71,#eaf979);
        background-size: 400%;
        border-radius: 40px;
        opacity: 0;
    }
    &:hover::before{
        filter: blur(20px);
        opacity: 1;
        animation: animate 10s linear infinite;
    }
}
::v-deep .el-form-item__label{
    color: white
}
</style>